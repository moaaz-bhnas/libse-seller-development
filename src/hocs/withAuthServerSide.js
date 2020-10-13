import nookies from "nookies";

export default function withAuthServerSide() {
  return async (context) => {
    try {
      const cookies = nookies.get(context);
      const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
      // the user is authenticated!
      return { props: {} };
    } catch (err) {
      const { lang } = context.query;
      context.res.writeHead(302, { Location: `/${lang}/login` });
      context.res.end();
      return { props: {} };
    }
  };
}
