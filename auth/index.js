const auth = {
    authReq:  (req, res, next) => {
        console.log(req.isAuthenticated());
        if(req.isAuthenticated()){
            return next()
        }
        else {
            res.redirect('/login')
        }
    },

    unauthReq: (req, res, next) => {
        if(req.isAuthenticated()){
            res.redirect('/')
        }
        else{
            return next()
        }
    },

    isAdmin: (req, res, next) => {
        if (req.user.roleID === 2){
            return next()
        }
        else{
            res.redirect('/')
        }
    }
}


module.exports = auth