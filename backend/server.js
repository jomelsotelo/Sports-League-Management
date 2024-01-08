import express from 'express'
import passport  from 'passport'
import { Strategy as LocalStrategy} from 'passport-local'

import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'
import db from './config/database.js'

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(passport.initialize());

// Configure local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'username', // Assuming email is the field used for username
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });

        if (!user || !user.validPassword(password)) {
          return done(null, false, { message: 'Invalid email or password' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});


app.use('/user', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

