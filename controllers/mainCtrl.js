module.exports = {
    getName( req, res ) {
        return res.status( 200 ).json( name );
    }
    , getLocation( req, res ) {
      return res.status( 200 ).json( location );
    }
    , getOccupations( req, res ) {
      if ( req.query.order === "asc" ) {
        return res.status( 200 ).json( occupations.occupations.sort() );
      }
      else if ( req.query.order === "desc" ) {
        return res.status( 200 ).json( occupations.occupations.sort().reverse() );
      }
        return res.status( 200 ).json( occupations );
    }
    , getHobbies( req, res ) {
      return res.status( 200 ).json( hobbies );
    }
};

// order=desc

const name = {
    name: "Friend to the Tree People, Jr. III"
};

const location = {
    location: "Dallas, Texas"
};

const occupations = {
    occupations: [ "Failing in spite of half-assed pursuit", "Video Editing", "30th percentile student at Devmountain school of witchcraft and ping-pong" ]
  }

const hobbies = {
    hobbies: [ {
      name: "Juggling",
      type: "current"
      }, {
      name: "Netflix",
      type: "past"
      } ]
};
