import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./explore.module.css";

const Explore = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/explore-main");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/my-clubs-main");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/profile-registered-main");
  }, [navigate]);

  return (
    <div className={styles.explore}>
      <div className={styles.sl11302254210351} />
      <img className={styles.exploreChild} alt="" src="/frame-193.svg" />
      <div className={styles.frameParent}>
        <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
          <b className={styles.home}>HOME</b>
        </div>
        <div className={styles.exploreWrapper} onClick={onFrameContainer1Click}>
          <b className={styles.home}>EXPLORE</b>
        </div>
        <div className={styles.myClubsWrapper} onClick={onFrameContainer2Click}>
          <b className={styles.home}>MY CLUBS</b>
        </div>
        <img
          className={styles.iconProfileCircle}
          alt=""
          src="/-icon-profile-circle.svg"
        />
      </div>
      <div className={styles.frameGroup} onClick={onFrameContainer8Click}>
        <div className={styles.frameWrapper}>
          <div className={styles.myProfileWrapper}>
            <b className={styles.home}>My Profile</b>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.logOutWrapper}>
            <b className={styles.home}>Log Out</b>
          </div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-32.svg" />
          <b className={styles.tedxPict}>TEDX PICT</b>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.vectorGroup}>
          <img className={styles.groupChild} alt="" src="/rectangle-32.svg" />
          <b className={styles.tedxPict}>TEDX PICT</b>
          <div className={styles.groupItem} />
          <div className={styles.vectorContainer}>
            <img className={styles.groupChild} alt="" src="/rectangle-32.svg" />
            <b className={styles.tedxPict}>TEDX PICT</b>
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-32.svg" />
          <b className={styles.tedxPict}>TEDX PICT</b>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.vectorGroup}>
          <img className={styles.groupChild} alt="" src="/rectangle-32.svg" />
          <b className={styles.tedxPict}>TEDX PICT</b>
          <div className={styles.groupItem} />
          <div className={styles.vectorContainer}>
            <img className={styles.groupChild} alt="" src="/rectangle-32.svg" />
            <b className={styles.tedxPict}>TEDX PICT</b>
            <div className={styles.groupItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
