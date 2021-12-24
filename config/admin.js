module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c0ff4976a5bd89bc7ab00ad94de8fc57'),
  },
});
