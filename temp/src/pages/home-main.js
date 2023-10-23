import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home-main.module.css";

const HomeMain = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/explore-main");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/my-clubs-main");
  }, [navigate]);

  const onIconProfileCircleClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.homeMain}>
      <div className={styles.sl11302254210351} />
      <div className={styles.homeMainChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.iconCalendarTick}
          alt=""
          src="/-icon-calendar-tick.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.homeWrapper}>
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
            onClick={onIconProfileCircleClick}
          />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.upcomingEventsWrapper}>
          <b className={styles.home}>UPCOMING EVENTS</b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.eventWrapper}>
              <b className={styles.event}>Event</b>
            </div>
            <div className={styles.eventWrapper}>
              <b className={styles.date}>Date</b>
            </div>
            <div className={styles.eventWrapper}>
              <b className={styles.date}>Club</b>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.xeniaWrapper}>
              <div className={styles.xenia}>Xenia</div>
            </div>
            <div className={styles.xeniaWrapper}>
              <div className={styles.thOct}>25th Oct</div>
            </div>
            <div className={styles.xeniaWrapper}>
              <div className={styles.xenia}>PCSB</div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.xeniaWrapper}>
              <div className={styles.xenia}>Xenia</div>
            </div>
            <div className={styles.xeniaWrapper}>
              <div className={styles.thOct}>25th Oct</div>
            </div>
            <div className={styles.xeniaWrapper}>
              <div className={styles.xenia}>PCSB</div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.xeniaWrapper}>
              <div className={styles.xenia}>Xenia</div>
            </div>
            <div className={styles.xeniaWrapper}>
              <div className={styles.thOct}>25th Oct</div>
            </div>
            <div className={styles.xeniaWrapper}>
              <div className={styles.xenia}>PCSB</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <img className={styles.lineIcon} alt="" src="/line-3.svg" />
        <div className={styles.vectorWrapper}>
          <img className={styles.frameChild1} alt="" src="/line-4.svg" />
        </div>
      </div>
      <div className={styles.iconNotificationParent}>
        <img
          className={styles.iconNotification}
          alt=""
          src="/-icon-notification.svg"
        />
        <div className={styles.enableWrapper}>
          <b className={styles.home}>ENABLE</b>
        </div>
        <b className={styles.enableNotificationsFor}>
          Enable Notifications for upcoming events
        </b>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.october2023Wrapper}>
          <b className={styles.home}>October 2023</b>
        </div>
        <div className={styles.vectorContainer}>
          <img className={styles.frameChild2} alt="" src="/line-4.svg" />
        </div>
        <img className={styles.frameChild3} alt="" src="/line-41.svg" />
        <div className={styles.frameParent6}>
          <div className={styles.mWrapper}>
            <b className={styles.home}>M</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.home}>T</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.home}>W</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.home}>T</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.home}>F</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.home}>S</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.home}>S</b>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.wrapper}>
            <b className={styles.home}>3</b>
          </div>
          <div className={styles.container}>
            <b className={styles.home}>5</b>
          </div>
          <div className={styles.frame}>
            <b className={styles.home}>10</b>
          </div>
          <div className={styles.wrapper1}>
            <b className={styles.home}>31</b>
          </div>
          <div className={styles.wrapper2}>
            <b className={styles.home}>28</b>
          </div>
          <div className={styles.wrapper3}>
            <b className={styles.home}>27</b>
          </div>
          <div className={styles.wrapper4}>
            <b className={styles.home}>26</b>
          </div>
          <div className={styles.wrapper5}>
            <b className={styles.home}>24</b>
          </div>
          <div className={styles.wrapper6}>
            <b className={styles.home}>21</b>
          </div>
          <div className={styles.wrapper7}>
            <b className={styles.home}>20</b>
          </div>
          <div className={styles.wrapper8}>
            <b className={styles.home}>19</b>
          </div>
          <div className={styles.wrapper9}>
            <b className={styles.home}>17</b>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.mWrapper}>
              <b className={styles.home}>2</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.home}>9</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.home}>16</b>
            </div>
            <div className={styles.wrapper13}>
              <b className={styles.home}>23</b>
            </div>
            <div className={styles.wrapper13}>
              <b className={styles.home}>30</b>
            </div>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.mWrapper}>
              <b className={styles.home}>1</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.home}>8</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.home}>15</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.home}>22</b>
            </div>
            <div className={styles.wrapper13}>
              <b className={styles.home}>29</b>
            </div>
          </div>
          <div className={styles.wrapper20}>
            <b className={styles.home}>14</b>
          </div>
          <div className={styles.wrapper21}>
            <b className={styles.home}>13</b>
          </div>
          <div className={styles.wrapper22}>
            <b className={styles.home}>12</b>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.wrapper23}>
              <b className={styles.home}>4</b>
            </div>
            <div className={styles.wrapper24}>
              <b className={styles.home}>11</b>
            </div>
            <div className={styles.wrapper25}>
              <b className={styles.home}>18</b>
            </div>
            <div className={styles.wrapper26}>
              <b className={styles.home}>25</b>
            </div>
          </div>
          <div className={styles.wrapper27}>
            <b className={styles.home}>7</b>
          </div>
          <div className={styles.wrapper28}>
            <b className={styles.home}>6</b>
          </div>
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.vectorFrame}>
          <img className={styles.frameChild1} alt="" src="/line-4.svg" />
        </div>
      </div>
      <div className={styles.homeMainInner}>
        <div className={styles.frameParent10}>
          <div className={styles.groupChild} />
          <div className={styles.totalRegisteredUsersParent}>
            <b className={styles.totalRegisteredUsers}>
              Total Registered Users
            </b>
            <b className={styles.b31}>57</b>
            <b className={styles.xenia3}>Xenia</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
