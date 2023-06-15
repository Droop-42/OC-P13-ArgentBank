import { argentbankApi } from "../../app/services/argentbankApi";



export const getProfileApiEndpoints = argentbankApi.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: () => ({
                url: '/api/v1/user/profile',
                method: 'POST',
            }),
            keepUnusedDataFor: 0,
        }),
    })
})

export const { useGetProfileQuery } = getProfileApiEndpoints