function removeTabAt(position: int): void {
  removeTabViewAt(position)
  const removedTab: Tab = mTabs.remove(position)
  if (removedTab !== null) {
    removedTab.reset()
    sTabPool.release(removedTab)
  }

  const newTabCount = mTabs.size()
  for (let i = position; i < newTabCount; i++) {
    mTabs.get(i).setPosition(i)
  }

  const selectedTabPosition = mSelectedTab !== null ? mSelectedTab.getPosition() : 0
  if (selectedTabPosition === position) {
    selectTab(mTabs.isEmpty() ? null : mTabs.get(Math.max(0, position - 1)))
  }
}

function removeTabAt(position: number): void {
  destroyTab(position)
  shiftTabsFrom(position)
  updateTabSelection(position)
}

function destroyTab(position: number): void {
  removeTabViewAt(position)
  const removedTab: Tab = tabs.remove(position)
  if (removedTab != null) {
    removedTab.reset()
    tabPool.release(removedTab)
  }
}

function shiftTabsFrom(position: number): void {
  for (let i = position; i < tabs.size(); i++) {
    tabs.get(i).setPosition(i);
  }
}

function updateTabSelection(position: number): void{
  if (selectedTabPosition() === position) {
    selectTab(tabs.isEmpty() ? null :
    tabs.get(Math.max(0, position - 1)));
  }
}
function selectedTabPosition(): number{
 return selectedTab != null ? selectedTab.getPosition() : 0;
}



