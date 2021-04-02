import config from '../config/config'
const domin = `${config.api.spaceXApi}/${config.version.spaceXApi}`
const defaultQueryHeaders = { 'content-type': 'application/json'}
const defaultPostConfiguration = { method: 'POST', headers: defaultQueryHeaders}

const defaultLaunchQuery = {
    query:{},
    options: { populate: ["payloads", "rocket", "landpad", "launchpad", "ships", "crew"], sort: { flight_number: "desc" }, limit: 20 }
}

export const getAllLaunches = async (page = 1, limit = defaultLaunchQuery.options.limit) => {
    const payload = { 
        ...defaultLaunchQuery,
        query: {...defaultLaunchQuery.query},
        options: {...defaultLaunchQuery.options, limit: limit, page: page}
    }
    let launchData = {}
    await fetch(`${domin}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) })
        .then(res => res.json())
        .then(data => {
            if(data){
                launchData = data
            }
        })
        return launchData
}