import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./explore-main.module.css";

const ExploreMain = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/my-clubs-main");
  }, [navigate]);

  const onIconProfileCircleClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  return (
    <div className={styles.exploreMain}>
      <div className={styles.sl11302254210351} />
      <img className={styles.exploreMainChild} alt="" src="/frame-193.svg" />
      <div className={styles.frameParent}>
        <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
          <b className={styles.home}>HOME</b>
        </div>
        <div className={styles.exploreWrapper}>
          <b className={styles.home}>EXPLORE</b>
        </div>
        <div className={styles.myClubsWrapper} onClick={onFrameContainer2Click}>
          <b className={styles.home}>MY CLUBS</b>
        </div>
        <img
          className={styles.iconProfileCircle}
          alt=""
          src="/-icon-profile-circle.svg"
          onClick={onIconProfileCircleClick}
        />
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

export default ExploreMain;
