import { argentbankApi } from "../../app/services/argentbankApi";

export const editProfileEndpoints = argentbankApi.injectEndpoints({
    endpoints: builder => ({
        editProfile: builder.mutation({
            query: userName => ({
                url: '/api/v1/user/profile',
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: { ...userName },
            })
        }),
    })
})

export const { useEditProfileMutation } = editProfileEndpoints