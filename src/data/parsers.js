import format from "./format";
import moment from "moment";

function usStats(data) {
    const [usStatsRaw] = data;
    
    return {
        cases: format.number(usStatsRaw.positive),
        deaths: format.number(usStatsRaw.death),
        recovered: format.number(usStatsRaw.recovered),
        ventilator: format.number(usStatsRaw.onVentilatorCurrently),
        hospitalized: format.number(usStatsRaw.hospitalized),
        icu: format.number(usStatsRaw.inIcuCurrently),
        tested: format.number(usStatsRaw.totalTestResults),
        updated: moment(usStatsRaw,lastModified).format('LLLL')
    }
}

export default {
    usStats,
}