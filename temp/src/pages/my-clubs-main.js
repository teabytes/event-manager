import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./my-clubs-main.module.css";

const MyClubsMain = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/explore-main");
  }, [navigate]);

  const onIconCalendarTickClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/explore-main");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/my-clubs-main");
  }, [navigate]);

  const onIconProfileCircleClick = useCallback(() => {
    navigate("/my-clubs");
  }, [navigate]);

  return (
    <div className={styles.myClubsMain}>
      <div className={styles.sl11302254210351} />
      <div
        className={styles.exploreMoreClubsWrapper}
        onClick={onFrameContainerClick}
      >
        <b className={styles.exploreMoreClubs}>EXPLORE MORE CLUBS</b>
      </div>
      <img
        className={styles.iconArrowRight1}
        alt=""
        src="/-icon-arrow-right-1.svg"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.iconCalendarTick}
          alt=""
          src="/-icon-calendar-tick.svg"
          onClick={onIconCalendarTickClick}
        />
        <div className={styles.frameParent}>
          <div className={styles.homeWrapper} onClick={onFrameContainer1Click}>
            <b className={styles.exploreMoreClubs}>HOME</b>
          </div>
          <div
            className={styles.exploreWrapper}
            onClick={onFrameContainer2Click}
          >
            <b className={styles.exploreMoreClubs}>EXPLORE</b>
          </div>
          <div
            className={styles.myClubsWrapper}
            onClick={onFrameContainer3Click}
          >
            <b className={styles.exploreMoreClubs}>MY CLUBS</b>
          </div>
          <img
            className={styles.iconProfileCircle}
            alt=""
            src="/-icon-profile-circle.svg"
            onClick={onIconProfileCircleClick}
          />
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameItem} alt="" src="/rectangle-321.svg" />
        <img className={styles.frameInner} alt="" src="/rectangle-321.svg" />
        <img className={styles.rectangleIcon} alt="" src="/rectangle-321.svg" />
        <div className={styles.memberSince2021Wrapper}>
          <b className={styles.exploreMoreClubs}>Member Since 2021</b>
        </div>
        <b className={styles.tedxPict}>TEDX PICT</b>
        <div className={styles.rectangleDiv} />
        <div className={styles.memberSince2021Container}>
          <b className={styles.exploreMoreClubs}>Member Since 2021</b>
        </div>
        <b className={styles.tedxPict1}>TEDX PICT</b>
        <div className={styles.frameChild1} />
        <div className={styles.memberSince2021Frame}>
          <b className={styles.exploreMoreClubs}>Member Since 2021</b>
        </div>
        <b className={styles.tedxPict2}>TEDX PICT</b>
        <div className={styles.frameChild2} />
      </div>
    </div>
  );
};

export default MyClubsMain;
