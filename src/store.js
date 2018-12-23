import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
      Price: {
        economyClass: "4,000",
        businessClass: "10,000",
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
      Price: {
        economyClass: "6,000",
        businessClass: "15,000",
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
  ]
}

export default new Vuex.Store({
  state,
  mutations: {

  },
  actions: {

  }
})
