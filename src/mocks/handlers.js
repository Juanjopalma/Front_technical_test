import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://restcountries.com/v3.1/all', ({ request }) => {

    // const fields = new URL(request.url).searchParams.get('fields')

    return HttpResponse.json([
        {
            "region": "Americas",
            "population": 2961161
        },
        {
            "region": "Africa",
            "population": 869595
        },
        {
            "region": "Africa",
            "population": 14862927
        },
        {
            "region": "Americas",
            "population": 40812
        },
        {
            "region": "Asia",
            "population": 3
        },
        {
            "region": "Europe",
            "population": 1901548
        },
        {
            "region": "Asia",
            "population": 2
        },
    ])
  }),
]