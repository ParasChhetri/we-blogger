import "./JoinMail.css";
import ownerImage_2 from '../../assets/images/owner-images/owner-image-2-removebg-preview.png';

export const JoinMail = () => {
  return (
    <>
      <div className="join-mail-container">
        <div className="join-mail-left">
          <img src={ownerImage_2} alt="" />
        </div>
        <div className="join-mail-right">
          <div className="join-mail-heading">
            <span className="dash"></span>
            <span className="my-font-l my-text-capitalize">join mailing list</span>
            <span className="dash"></span>
          </div>
          <p>
            Sign up and get all the latest, ad-free reviews, recipes and news
            sent to your inbox
          </p>
          <div>
            <form className="form-container">
                <input type="email" placeholder="Email Address"/>
                <button type="submit" className="join-mail-btn">subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
