import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./profile-participated.module.css";

const ProfileParticipated = () => {
  const navigate = useNavigate();

  const onIconCalendarTickClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/explore-main");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/my-clubs-main");
  }, [navigate]);

  const onREGISTEREDEVENTSTextClick = useCallback(() => {
    navigate("/profile-registered-main");
  }, [navigate]);

  const onFrameContainer37Click = useCallback(() => {
    navigate("/profile-participated-main");
  }, [navigate]);

  return (
    <div className={styles.profileParticipated}>
      <div className={styles.sl11302254210351} />
      <div className={styles.profileParticipatedChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.iconCalendarTick}
          alt=""
          src="/-icon-calendar-tick.svg"
          onClick={onIconCalendarTickClick}
        />
        <div className={styles.frameParent}>
          <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
            <b className={styles.home}>HOME</b>
          </div>
          <div
            className={styles.exploreWrapper}
            onClick={onFrameContainer1Click}
          >
            <b className={styles.home}>EXPLORE</b>
          </div>
          <div
            className={styles.exploreWrapper}
            onClick={onFrameContainer2Click}
          >
            <b className={styles.home}>MY CLUBS</b>
          </div>
          <img
            className={styles.iconProfileCircle}
            alt=""
            src="/-icon-profile-circle.svg"
          />
        </div>
      </div>
      <div className={styles.profileParticipatedItem} />
      <img
        className={styles.profileParticipatedInner}
        alt=""
        src="/rectangle-21.svg"
      />
      <div className={styles.achievementsWrapper}>
        <b className={styles.home}>ACHIEVEMENTS:</b>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.eventWrapper}>
            <b className={styles.event}>Event</b>
          </div>
          <div className={styles.eventWrapper}>
            <b className={styles.prize}>Prize</b>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.xeniaWrapper}>
            <div className={styles.xenia}>Xenia</div>
          </div>
          <div className={styles.xeniaWrapper}>
            <div className={styles.firstPrize}>First Prize</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.xeniaWrapper}>
            <div className={styles.xenia}>Xenia</div>
          </div>
          <div className={styles.xeniaWrapper}>
            <div className={styles.firstPrize}>First Prize</div>
          </div>
        </div>
      </div>
      <div className={styles.detailsWrapper}>
        <b className={styles.home}>DETAILS:</b>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <div className={styles.frameParent3}>
            <div className={styles.nameJaneDorotheaWrapper}>
              <div className={styles.home}>
                <p className={styles.name}>Name</p>
                <p className={styles.name}>&nbsp;</p>
                <p className={styles.janeDorothea}>Jane Dorothea</p>
              </div>
            </div>
            <div className={styles.nameJaneDorotheaWrapper}>
              <div className={styles.home}>
                <p className={styles.name}>Student ID</p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.janeDorothea}>31306</p>
              </div>
            </div>
            <div className={styles.home}>
              <p className={styles.name}>E-mail</p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.janeDorothea}> janedorothea@xyz.com</p>
            </div>
            <div className={styles.nameJaneDorotheaWrapper}>
              <div className={styles.home}>
                <p className={styles.name}>Contact Number</p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.janeDorothea}>1234567895</p>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.iconEdit2} alt="" src="/-icon-edit-2.svg" />
      </div>
      <div className={styles.previousParticipationsWrapper}>
        <b className={styles.previousParticipations}>PREVIOUS PARTICIPATIONS</b>
      </div>
      <b
        className={styles.registeredEvents}
        onClick={onREGISTEREDEVENTSTextClick}
      >
        REGISTERED EVENTS
      </b>
      <div className={styles.frameParent4}>
        <div className={styles.eventContainer}>
          <b className={styles.event1}>Event</b>
        </div>
        <div className={styles.eventContainer}>
          <b className={styles.date}>Date</b>
        </div>
        <div className={styles.eventContainer}>
          <b className={styles.date}>Club</b>
        </div>
        <div className={styles.xeniaFrame}>
          <div className={styles.pcsb}>Xenia</div>
        </div>
        <div className={styles.xeniaFrame}>
          <div className={styles.thOct}>25th Oct</div>
        </div>
        <div className={styles.xeniaFrame}>
          <div className={styles.pcsb}>PCSB</div>
        </div>
        <div className={styles.thOctParent}>
          <div className={styles.pscb}>Xenia</div>
        </div>
        <div className={styles.thOctParent}>
          <div className={styles.thOct1}>25th Oct</div>
          <div className={styles.thOctContainer}>
            <div className={styles.thOct}>25th Oct</div>
          </div>
        </div>
        <div className={styles.thOctParent}>
          <div className={styles.pscb}>PCSB</div>
        </div>
        <div className={styles.xeniaFrame}>
          <div className={styles.pcsb}>Xenia</div>
        </div>
        <div className={styles.xeniaFrame} />
        <div className={styles.xeniaFrame}>
          <div className={styles.pscb}>PSCB</div>
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.frameWrapper}>
          <div
            className={styles.myProfileWrapper}
            onClick={onFrameContainer37Click}
          >
            <b className={styles.home}>My Profile</b>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.logOutWrapper}>
            <b className={styles.home}>Log Out</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileParticipated;
