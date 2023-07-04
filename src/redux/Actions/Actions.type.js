export const registerUser=(users)=>({
    type:"REGISTER_USER",
    payload:users
});

export const loginUser=(users)=>({
    type:"LOGIN_USER",
    payload:users
});

export const UserOtp=()=>({
    type:"USER_OTP"
})
export const UserFeed=(users)=>({
    type:"USER_FEED",
    payload:users
})