import passport from "passport";
//import jwt, {ExtractJwt} from "jsonwebtoken";
import jwt from "jsonwebtoken";
//const { ExtractJwt } = jwt;
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt"; 


// const JWTStrategy = jwt.JWTStrategy;
// const ExtractJwt = jwt.ExtractJwt;

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies["coderCookieToken"]; 
    }
    return token;
  };

const initializePassport = () => {
    passport.use(
        "jwt", 
        new JWTStrategy(
            
            {jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
            secretOrKey: "CoderKeyQueNadieDebeSaber"
        },
        async (jwt_payload, done) => {
            try {
                return done(null, jwt_payload);
            } catch (error) {
                done(error)
            }
        }
        ),
    )
}

export default initializePassport;