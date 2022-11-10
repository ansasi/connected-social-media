export const categories = [
  {
    name: "animals",
    image: "https://source.unsplash.com/200x200/?animals",
  },
  {
    name: "architecture",
    image: "https://source.unsplash.com/200x200/?architecture",
  },
  {
    name: "art",
    image: "https://source.unsplash.com/200x200/?art",
  },
  {
    name: "cars",
    image: "https://source.unsplash.com/200x200/?cars",
  },
  {
    name: "fitness",
    image: "https://source.unsplash.com/200x200/?fitness",
  },
  {
    name: "food",
    image: "https://source.unsplash.com/200x200/?food",
  },
  {
    name: "geek",
    image: "https://source.unsplash.com/200x200/?geek",
  },
  {
    name: "photography",
    image: "https://source.unsplash.com/200x200/?photography",
  },
  {
    name: "nature",
    image: "https://source.unsplash.com/200x200/?nature",
  },
  {
    name: "quotes",
    image: "https://source.unsplash.com/200x200/?quotes",
  },
  {
    name: "sports",
    image: "https://source.unsplash.com/200x200/?sports",
  },
  {
    name: "technology",
    image: "https://source.unsplash.com/200x200/?technology",
  },
  {
    name: "travel",
    image: "https://source.unsplash.com/200x200/?travel",
  },
  {
    name: "others",
    image: "https://source.unsplash.com/200x200",
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};
