import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const type = {
  SET_ADDTOCART:"SET_ADDTOCART",
  SET_ACCESSTOKEN:"SET_ACCESSTOKEN",
  SET_USERINFO:"SET_USERINFO",
  SET_CLEARCART:"SET_CLEARCART",
  SET_PASSENGER:"SET_PASSENGER"
}

const state = {
  flight_Information: [
    {
      id: "jbcheufk9y3",
      Date: "2018年12月23日",
      DepartureTime: "07:55",
      Departure: "桃園國際機場 (TPE)",
      ArrivalTime: "11:55",
      Arrival: "大阪關西機場 (OSK)",
      flightTime: "04:00",
      Cabin: "",
      flightType: "直航航班",
      GoBack:"GO",
      Price: {
        economyClass: "4000",
        businessClass: "10000",
      },
      Consignment: {
        economyClass: false,
        businessClass: true,
      },
      Change: {
        economyClass: true,
        businessClass: true,
      },
      Return: {
        economyClass: false,
        businessClass: true,
      },
      SeatSelection: {
        economyClass: true,
        businessClass: true,
      },
      MileageAccumulation: {
        economyClass: false,
        businessClass: true,
      },
      MileageUpgrade: {
        economyClass: false,
        businessClass: true,
      }
    }, {
      id: "jd764bjkocj",
      Date: "2018年12月23日",
      DepartureTime: "12:55",
      Departure: "大阪關西機場 (OSK)",
      ArrivalTime: "16:55",
      Arrival: "桃園國際機場 (TPE)",
      flightTime: "04:00",
      Cabin: "",
      flightType: "直航航班",
      GoBack: "back",
      Price: {
        economyClass: "6000",
        businessClass: "15000",
      },
      Consignment: {
        economyClass: false,
        businessClass: true,
      },
      Change: {
        economyClass: true,
        businessClass: true,
      },
      Return: {
        economyClass: true,
        businessClass: true,
      },
      SeatSelection: {
        economyClass: true,
        businessClass: true,
      },
      MileageAccumulation: {
        economyClass: false,
        businessClass: true,
      },
      MileageUpgrade: {
        economyClass: false,
        businessClass: true,
      }
    }
  ],
  cart:{
    To:{},
    From:{}
  },
  accessToken:"",
  userInfo:{
    name:"",
    email:"",
    uid:"",
    picture:""
  },
  passengerData:{}
}

export default new Vuex.Store({
  state,
  mutations: {
    [type.SET_ADDTOCART](state,load){
      if (load.GoBack === "GO"){
        state.cart.From = load 
      }else{
        state.cart.To = load 
      }
    },
    [type.SET_ACCESSTOKEN](state, token) {
      if (token === 'unknown'){
        return state.accessToken = "";
      }
      state.accessToken = token;
    },
    [type.SET_USERINFO](state, user) {
      state.userInfo.name = user.name;
      state.userInfo.email = user.email;
      state.userInfo.uid = user.uid;
      state.userInfo.picture = user.picture.data.url;
    },
    [type.SET_CLEARCART](state, goback){
      if(goback === "GO"){
        state.cart.From = {}
      }else{
        state.cart.To = {}
      }
    },
    [type.SET_PASSENGER](state, passengerData) {
      state.passengerData = passengerData
    }
  },
  actions: {
    addToCart:({commit},load)=>{
      commit(type.SET_ADDTOCART,load)
    },
    saveAccessToken: ({commit},token)=>{
      commit(type.SET_ACCESSTOKEN, token)
    },
    getUserInfo: ({ commit }, user) => {
      commit(type.SET_USERINFO, user)
    },
    clearCart: ({commit}, goback) => {
      commit(type.SET_CLEARCART, goback)
    },
    addpassengerData: ({ commit }, passengerData) => {
      commit(type.SET_PASSENGER, passengerData)
    }
  }
})
