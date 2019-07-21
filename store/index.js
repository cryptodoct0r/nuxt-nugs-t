export const state = () => ({
  loadedMeetups: [{
      id: "001",
      title: "Conference in Kiev",
      montra: "The Capital of Ukraine",
      date: "2019-29-04",
      details: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      src: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1455214872/0-kiev0316.jpg?itok=6FUntx2l"
    },
    {
      id: "002",
      date: "2019-29-04",
      title: "Conference in Ternopil",
      montra: "Misto Bahato Fine Odne!",
      details: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      src: "https://rada.te.ua/app/webroot/files/DJI-0006-218000.jpg"
    },
    {
      id: "003",
      date: "2019-29-04",
      title: "Conference in Odesa",
      montra: "Beauty and Tourism!",
      details: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      src: "https://lonelyplanetimages.imgix.net/a/g/hi/t/0e8883342c4c387204eb7fe94f836a02-odesa.jpg?sharp=10&vib=20&w=1200"
    },
    {
      id: "004",
      date: "2019-29-04",
      title: "Conference in Lviv",
      montra: "The culture is preserved!",
      details: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      src: "https://magazine.startus.cc/wp-content/uploads/2015/06/lviv.jpg"
    }
  ],
  user: {
    id: "001",
    registeredMeetups: ['001']
  }
})

export const mutations = {
  createMeetup(state, payload) {
    state.loadedMeetups.push(payload)
  }
}

export const actions = {
  createMeetup({
    commit
  }, payload) {
    const meetup = {
      title: payload.title,
      location: payload.location,
      src: payload.src,
      description: payload.description,
      date: payload.date,
      id: "005"
    }
    commit('createMeetup', meetup)
  }
}

export const getters = {
  loadedMeetups(state) {
    return state.loadedMeetups.sort((meetupA, meetupB) => {
      return meetupA.date > meetupB.date
    })
  },
  featuredMeetups(state, getters) {
    return getters.loadedMeetups.slice(0, 5)
  },
  loadedMeetup(state) {
    return (meetupId) => {
      return state.loadedMeetups.find((meetup) => {
        return meetup.id === meetupId
      })
    }
  }
}
