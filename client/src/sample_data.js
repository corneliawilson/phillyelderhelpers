import user1 from './assets/imgs/user1.jpg';
import user2 from './assets/imgs/user2.jpg';
import user3 from './assets/imgs/user3.jpg';
import user4 from './assets/imgs/user4.jpg';

export const skills = [
  { id: 1, name: "Home repair", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
  { id: 2, name: "Yardwork", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
  { id: 3, name: "Plumbing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
  { id: 4, name: "Computer help", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
]

export const users = [
  {
    id: 1,
    name: 'John Volunteer',
    email: 'johnvolunteer@gmail.com',
    phone: '(123) 456-7890',
    photo: user1,
    group_leader: true,
    group_ids: [1],
    skill_ids: [1, 2, 3],
    address: '123 Market St.'
  }, 
  {
    id: 2,
    name: 'Jane Volunteer',
    email: 'janevolunteer@gmail.com',
    phone: '(123) 456-7890',
    photo: user2,
    group_leader: false,
    group_ids: [1],
    skill_ids: [1, 4],
    address: '123 Market St.'
  },   
  {
    id: 3,
    name: 'Rob Volunteer',
    email: 'rob_volunteer@gmail.com',
    phone: '(123) 456-7890',
    photo: user3,
    group_leader: false,
    group_ids: [1],
    skill_ids: [2, 4],
    address: '123 Market St.'
  }, 
  {
    id: 4,
    name: 'Sam Volunteer',
    email: 'sam_volunteer@gmail.com',
    phone: '(123) 456-7890',
    photo: user4,
    group_leader: false,
    group_ids: [1],
    skill_ids: [3],
    address: '123 Market St.'
  },
]

export const groups = [
  {
    id: 1,
    name: "Philly Volunteer Org",
    leader_id: 1
  }
]