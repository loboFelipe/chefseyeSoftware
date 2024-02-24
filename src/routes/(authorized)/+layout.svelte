<script lang="ts">
	import { AppBar, AppRail, AppRailTile, AppShell, Avatar, popup, type PopupSettings } from "@skeletonlabs/skeleton";


    const popupClick: PopupSettings = {
        event: 'click',
        target: 'popupClick',
        placement: 'top'
    };

    let currentTile: number = 0;
</script>

<AppShell slotSidebarLeft="border border-b-0 border-t-0 border-l-0 border-tertiary-900 fixed top-[4.5rem] z-10 h-[100vh]" slotHeader="shadow-2xl fixed left-0 right-0 z-10">
	<svelte:fragment slot="header">
        <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
            <svelte:fragment slot="lead">
                <h3 class="hidden md:block">ChefsEye</h3>
                <button class="md:hidden">(icon)</button>
            </svelte:fragment>
            <h3 class="md:hidden">ChefsEye</h3>
            <svelte:fragment slot="trail">
                <div class="card p-4 w-72 shadow-xl" data-popup="popupClick">
					<div class="space-y-4">
						<div class="flex items-center gap-3">
                            <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" rounded="rounded-full" />
                            <div>
                                <p class="font-bold">Skeleton</p>
                                <p class="opacity-50">@SkeletonUI</p>
                            </div>
                        </div>
						<div class="flex gap-4">
							<small><strong>100</strong> <span class="opacity-50">Following</span></small>
							<small><strong>1000</strong> <span class="opacity-50">Followers</span></small>
						</div>
						<div class="space-y-2">
                            <a class="btn variant-soft-surface w-full" href="/account" target="_blank" rel="noreferrer">Account</a>
                            <button class="btn variant-soft-primary w-full">Log out</button>
                        </div>
					</div>
					<div class="arrow bg-surface-100-800-token" />
				</div>
                <button use:popup={popupClick}>
                    <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" rounded="rounded-full" />
                </button>
            </svelte:fragment>
        </AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden md:block">
            <AppRail background="bg-transparent">
                <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Dashboard</span>
                </AppRailTile>
                <!-- --- -->
                <AppRailTile bind:group={currentTile} name="tile-1" value={1} title="tile-1">
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Restaurants</span>
                </AppRailTile>
                <AppRailTile bind:group={currentTile} name="tile-2" value={2} title="tile-2">
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Kitchen</span>
                </AppRailTile>
                <AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Menu</span>
                </AppRailTile>
                <AppRailTile bind:group={currentTile} name="tile-3" value={4} title="tile-3">
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Storage</span>
                </AppRailTile>
                <AppRailTile bind:group={currentTile} name="tile-3" value={5} title="tile-3">
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>QR Code</span>
                </AppRailTile>
            </AppRail>
        </div>
	</svelte:fragment>
	
	<div class="px-4 md:px-24 pt-20">
        <slot />
    </div>
</AppShell>