import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/sideBar/Sidebar";
import Dashboard from "../pages/Dashboard/Dashboard";
import DailyStatus from "../pages/DailyStatus/DailyStatus";
import Commission from "../pages/JournalSetting/Commision/Commission";
import PrivacyAndPublicProfile from "../pages/JournalSetting/PrivacyAndPublicProfile/PrivacyAndPublicProfile";
import Portfolio from "../pages/JournalSetting/Portfolio/Portfolio";
import TradeSetting from "../pages/JournalSetting/TradeSetting/TradeSetting";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SignUp/SingUp";
import DaysAndTimesC from "../pages/Performance/Compare/DaysAndTimes/DaysAndTimes";
import InstrumentC from "../pages/Performance/Compare/Instrument/Instrument";
import LiquidityC from "../pages/Performance/Compare/Liquidity/Liquidity";
import MarketBehaviourC from "../pages/Performance/Compare/Marketbehaviour/MarketBehaviour";
import PriceVolumeC from "../pages/Performance/Compare/PriceVolume/PriceVolume";
import WinLossExpectationC from "../pages/Performance/Compare/WinLossExpectation/WinLossExpectation";
import DaysAndTimesD from "../pages/Performance/Details/DaysAndTimes/DaysAndTimes";
import InstrumentD from "../pages/Performance/Details/Instrument/Instrument";
import LiquidityD from "../pages/Performance/Details/Liquidity/Liquidity";
import MarketBehaviourD from "../pages/Performance/Details/Marketbehaviour/MarketBehaviour";
import PriceVolumeD from "../pages/Performance/Details/PriceVolume/PriceVolume";
import WinLossExpectationD from "../pages/Performance/Details/WinLossExpectation/WinLossExpectation";
import Drawdown from "../pages/Performance/DrawDown/Drawdown";
import OverView from "../pages/Performance/Overview/OverView";
import Reports from "../pages/Performance/Reports/Reports";
import TagBreakDown from "../pages/Performance/TagBreakDown/TagBreakDown";
import DaysAndTimesWLD from "../pages/Performance/WinVSLossDays/DaysAndTimes/DaysAndTimes";
import InstrumentWLD from "../pages/Performance/WinVSLossDays/Instrument/Instrument";
import LiquidityWLD from "../pages/Performance/WinVSLossDays/Liquidity/Liquidity";
import MarketBehaviourWLD from "../pages/Performance/WinVSLossDays/Marketbehaviour/MarketBehaviour";
import PriceVolumeWLD from "../pages/Performance/WinVSLossDays/PriceVolume/PriceVolume";
import WinLossExpectationWLD from "../pages/Performance/WinVSLossDays/WinLossExpectation/WinLossExpectation";
import TradeLog from "../pages/TradeLog/TradeLog";
import Trade from "../pages/TradeLog/Trade/Trade";
import Performance from "../pages/Performance/Performance";
import Journal from "../pages/Journal/Journal";
import "./App.css";
import News from "../pages/News/News";
import DailyStats from "../pages/DailyStatus/DailyStats/DailyStats";
import TradingViewWidget from "../pages/TradingViewChart/tradingViewChart";
import Setting from '../pages/JournalSetting/JournalComponent'
import UserCsv from "../pages/UserCSV/UserCsv";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../Redux/AllAccess";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
// import Reports from '../pages/Performance/Reports/Reports'

const App = () => {
  const dispatch = useDispatch();
  const { authenticateRoute } = bindActionCreators(actionCreator, dispatch)
  const authenticateUser=useSelector((state)=>state.authenticateUser)
  useEffect(() => {
    const Token=localStorage.getItem("AuthToken");
    if (Token) {
      authenticateRoute(true)
    } else {
      authenticateRoute(false)
    }
    // localStorage.removeItem("AuthToken")
  },[])
  return (
    <Router>
      <Sidebar>
        <Routes>
          {authenticateUser ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/login" element={<Dashboard />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/dashboard" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/dailyStatus" element={<DailyStatus />} />
          ) : (
            <Route path="/dailyStatus" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/tradelog" element={<TradeLog />} />
          ) : (
            <Route path="/tradelog" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/performance" element={<Performance />} />
          ) : (
            <Route path="/performance" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/journal" element={<Journal />} />
          ) : (
            <Route path="/journal" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/news" element={<News />} />
          ) : (
            <Route path="/news" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/usercsv" element={<UserCsv />} />
          ) : (
            <Route path="/usercsv" element={<Login />} />
          )}
          {authenticateUser ? (
            <Route path="/setting" element={<Setting />} />
          ) : (
            <Route path="/setting" element={<Login />} />
          )}

          <Route path="/signup" element={<SingUp />} />
        </Routes>

        {/* <Routes>
        
        <Route path="/trade" element={<Trade />} />
          <Route path='/tradingViewchart' element={<TradingViewWidget />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/sidebar" element={<Sidebar />} />
          
          <Route path="/journalSetting/commission" element={<Commission />} />
          <Route path="/journalSetting/privacy" element={<PrivacyAndPublicProfile />} />
          <Route path="/journalSetting/Portfolio" element={<Portfolio />} />
          <Route path="/journalSetting/tradesetting" element={<TradeSetting />} />
          
          <Route path="/performance/compare/daysandtimes" element={<DaysAndTimesC />} />
          <Route path="/performance/compare/instrument" element={<InstrumentC />} />
          <Route path="/performance/compare/liquidity" element={<LiquidityC />} />
          <Route path="/performance/compare/marketbahviour" element={<MarketBehaviourC />} />
          <Route path="/performance/compare/pricevolume" element={<PriceVolumeC />} />
          <Route path="/performance/compare/winlossexpectation" element={<WinLossExpectationC />} />
          <Route path="/performance/detail/daysandtimes" element={<DaysAndTimesD />} />
          <Route path="/performance/detail/instrument" element={<InstrumentD />} />
          <Route path="/performance/detail/liquidity" element={<LiquidityD />} />
          <Route path="/performance/detail/marketbahviour" element={<MarketBehaviourD />} />
          <Route path="/performance/detail/pricevolume" element={<PriceVolumeD />} />
          <Route path="/performance/detail/winlossexpectation" element={<WinLossExpectationD />} />
          <Route path="/performance/drawdown" element={<Drawdown />} />
          <Route path="/performance/overview" element={<OverView />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/performance/tagbreakdown" element={<TagBreakDown />} />
          <Route path="/performance/winvslossday/daysandtimes" element={<DaysAndTimesWLD />} />
          <Route path="/performance/winvslossday/instrument" element={<InstrumentWLD />} />
          <Route path="/performance/winvslossday/liquidity" element={<LiquidityWLD />} />
          <Route path="/performance/winvslossday/marketbahviour" element={<MarketBehaviourWLD />} />
          <Route path="/performance/winvslossday/pricevolume" element={<PriceVolumeWLD />} />
          <Route path="/performance/winvslossday/winlossexpectation" element={<WinLossExpectationWLD />} />
          
        </Routes> */}
      </Sidebar>
    </Router>
  );
};

export default App;
