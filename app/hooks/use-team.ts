import { useTeamStore } from '@/stores/team'

export function useTeam() {
  const members = useTeamStore((state) => state.members)

  return {
    members,
  } as const
}
