import { create } from 'zustand'
import { TeamMember } from '@/types/team'

interface TeamState {
  members: TeamMember[]
}

export const useTeamStore = create<TeamState>(() => ({
  members: [
    {
      id: 'stanley-lewis',
      name: 'Dr. Stanley Lewis',
      title: 'Founder',
      image: '/team/stanley.jpg',
    },
    {
      id: 'darryl-fisher',
      name: 'Darryl Fisher',
      title: 'Founder',
      image: '/team/darryl.png',
    },
    {
      id: 'travis-james',
      name: 'Travis James',
      title: 'CTO',
      image: '/team/travis.jpg',
    },
  ],
}))
