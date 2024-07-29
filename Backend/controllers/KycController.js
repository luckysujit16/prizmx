const axios = require('axios');
const crypto = require('crypto');

class KycController {
    constructor(pool, sumsubKycToken, sumsubKycSecretKey) {
        this.pool = pool;
        this.sumsubKycToken = sumsubKycToken;
        this.sumsubKycSecretKey = sumsubKycSecretKey;
    }

    async index(req, res) {
        let data = {};
        const userId = req.user.user_id;
        data.title = "KYC";
        
        try {
            const [getKeyc] = await this.pool.query('SELECT * FROM pzmx_kyc WHERE user_id = ?', [userId]);
            
            if (!getKeyc.length) {
                const tokenData = await this.getAccessToken(`${userId}_PZMX`);
                data.is_verified = 0;
                data.token = tokenData;
                data.message = '';
            } else if (getKeyc[0].reviewStatus === 'init' || getKeyc[0].reviewStatus === 'pending') {
                const tokenData = await this.getAccessToken(`${userId}_PZMX`);
                data.is_verified = 0;
                data.token = tokenData;
                data.message = '';
            } else if (getKeyc[0].reviewStatus === 'completed') {
                const reviewResult = JSON.parse(getKeyc[0].reviewResult);
                
                if (reviewResult && reviewResult.reviewAnswer === 'GREEN') {
                    data.is_verified = 1;
                    data.message = 'Your KYC Has Been Verified!';
                    await this.pool.query('UPDATE pzmx_kyc SET is_verified = 1 WHERE user_id = ?', [userId]);
                } else if (reviewResult && reviewResult.reviewAnswer === 'RED') {
                    if (reviewResult.reviewRejectType === 'RETRY') {
                        const tokenData = await this.getAccessToken(`${userId}_PZMX`);
                        data.is_verified = 0;
                        data.token = String(tokenData.token);
                        data.message = '';
                    } else if (reviewResult.moderationComment || reviewResult.reviewRejectType === 'FINAL') {
                        data.is_verified = 1;
                        data.message = reviewResult.moderationComment;
                    }
                }
            }

            return res.json({ status: "OK",data: data  });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ errors: [{ msg: err.message }] });
        }
    }

    async getAccessToken(externalUserId) {
        const ts = Math.floor(Date.now() / 1000);
        const levelName = 'pzmx_kyc';
        const url = `https://api.sumsub.com/resources/accessTokens?userId=${externalUserId}&levelName=${levelName}`;
        const url1 = `/resources/accessTokens?userId=${externalUserId}&levelName=${levelName}`;
        const body = '';

       

        const headers = {
            "X-App-Token": this.sumsubKycToken,
            "X-App-Access-Sig": this.createSignature(ts, 'POST', url1, body),
            "X-App-Access-Ts": ts.toString()
        };
        
        try {
            const response = await axios.post(url, body, { headers });
            
            const resData = response.data;
            if (resData.token && resData.userId) {
                resData.status = 1;
                return resData;
            } else {
                resData.status = 0;
                return resData;
            }
        } catch (error) {
            // console.log(error);
            return { status: 0, error: error.message };
        }
    }

    createSignature(ts, httpMethod, url, httpBody) {
        return crypto
            .createHmac('sha256', this.sumsubKycSecretKey)
            .update(ts + httpMethod.toUpperCase() + url + httpBody)
            .digest('hex');
    }
}

module.exports = KycController;
