import { createSelector } from 'reselect';

const selectSquad = (state: any) => state.homeBase.squad;

export const isMemberAlready = (personName: any) =>
  createSelector([selectSquad], (squadMembers) => {
    const foundMember = squadMembers.filter((m: any) => m.name === personName);
    return foundMember.length > 0;
  });
