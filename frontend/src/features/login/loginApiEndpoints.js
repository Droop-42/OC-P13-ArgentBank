import { argentbankApi } from "../../app/services/argentbankApi";

export const loginApiEndpoints = argentbankApi.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/api/v1/user/login',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: { ...credentials },
            })
        }),
    })
})

export const { useLoginMutation } = loginApiEndpoints