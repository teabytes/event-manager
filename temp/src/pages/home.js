import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
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

  const onFrameContainer74Click = useCallback(() => {
    navigate("/profile-registered-main");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.sl11302254210351} />
      <div className={styles.homeChild} />
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
            <b className={styles.explore}>HOME</b>
          </div>
          <div
            className={styles.exploreWrapper}
            onClick={onFrameContainer1Click}
          >
            <b className={styles.explore}>EXPLORE</b>
          </div>
          <div
            className={styles.exploreWrapper}
            onClick={onFrameContainer2Click}
          >
            <b className={styles.explore}>MY CLUBS</b>
          </div>
          <img
            className={styles.iconProfileCircle}
            alt=""
            src="/-icon-profile-circle.svg"
          />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.upcomingEventsWrapper}>
          <b className={styles.explore}>UPCOMING EVENTS</b>
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
          <b className={styles.explore}>ENABLE</b>
        </div>
        <b className={styles.enableNotificationsFor}>
          Enable Notifications for upcoming events
        </b>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.october2023Wrapper}>
          <b className={styles.explore}>October 2023</b>
        </div>
        <div className={styles.vectorContainer}>
          <img className={styles.frameChild2} alt="" src="/line-4.svg" />
        </div>
        <img className={styles.frameChild3} alt="" src="/line-41.svg" />
        <div className={styles.frameParent6}>
          <div className={styles.mWrapper}>
            <b className={styles.explore}>M</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.explore}>T</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.explore}>W</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.explore}>T</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.explore}>F</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.explore}>S</b>
          </div>
          <div className={styles.mWrapper}>
            <b className={styles.explore}>S</b>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.wrapper}>
            <b className={styles.explore}>3</b>
          </div>
          <div className={styles.container}>
            <b className={styles.explore}>5</b>
          </div>
          <div className={styles.frame}>
            <b className={styles.explore}>10</b>
          </div>
          <div className={styles.wrapper1}>
            <b className={styles.explore}>31</b>
          </div>
          <div className={styles.wrapper2}>
            <b className={styles.explore}>28</b>
          </div>
          <div className={styles.wrapper3}>
            <b className={styles.explore}>27</b>
          </div>
          <div className={styles.wrapper4}>
            <b className={styles.explore}>26</b>
          </div>
          <div className={styles.wrapper5}>
            <b className={styles.explore}>24</b>
          </div>
          <div className={styles.wrapper6}>
            <b className={styles.explore}>21</b>
          </div>
          <div className={styles.wrapper7}>
            <b className={styles.explore}>20</b>
          </div>
          <div className={styles.wrapper8}>
            <b className={styles.explore}>19</b>
          </div>
          <div className={styles.wrapper9}>
            <b className={styles.explore}>17</b>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.mWrapper}>
              <b className={styles.explore}>2</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.explore}>9</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.explore}>16</b>
            </div>
            <div className={styles.wrapper13}>
              <b className={styles.explore}>23</b>
            </div>
            <div className={styles.wrapper13}>
              <b className={styles.explore}>30</b>
            </div>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.mWrapper}>
              <b className={styles.explore}>1</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.explore}>8</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.explore}>15</b>
            </div>
            <div className={styles.mWrapper}>
              <b className={styles.explore}>22</b>
            </div>
            <div className={styles.wrapper13}>
              <b className={styles.explore}>29</b>
            </div>
          </div>
          <div className={styles.wrapper20}>
            <b className={styles.explore}>14</b>
          </div>
          <div className={styles.wrapper21}>
            <b className={styles.explore}>13</b>
          </div>
          <div className={styles.wrapper22}>
            <b className={styles.explore}>12</b>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.wrapper23}>
              <b className={styles.explore}>4</b>
            </div>
            <div className={styles.wrapper24}>
              <b className={styles.explore}>11</b>
            </div>
            <div className={styles.wrapper25}>
              <b className={styles.explore}>18</b>
            </div>
            <div className={styles.wrapper26}>
              <b className={styles.explore}>25</b>
            </div>
          </div>
          <div className={styles.wrapper27}>
            <b className={styles.explore}>7</b>
          </div>
          <div className={styles.wrapper28}>
            <b className={styles.explore}>6</b>
          </div>
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.vectorFrame}>
          <img className={styles.frameChild1} alt="" src="/line-4.svg" />
        </div>
      </div>
      <div className={styles.homeInner}>
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
      <div className={styles.frameParent11}>
        <div className={styles.frameWrapper}>
          <div
            className={styles.myProfileWrapper}
            onClick={onFrameContainer74Click}
          >
            <b className={styles.explore}>My Profile</b>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.logOutWrapper}>
            <b className={styles.explore}>Log Out</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
