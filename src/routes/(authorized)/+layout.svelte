<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { invalidateAll } from "$app/navigation";
	import { AppBar, AppRail, AppRailAnchor, AppShell, Avatar, popup, type PopupSettings } from "@skeletonlabs/skeleton";
    import type { PageData } from "../$types";
    import { page } from "$app/stores";
    
    export let data: PageData;
    $: ({ user } = data);

    const popupClick: PopupSettings = {
        event: 'click',
        target: 'popupClick',
        placement: 'top'
    };
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
                            <Avatar initials={`${user.name.split(' ')[0].split('')[0]}${user.name.split(' ')[1].split('')[0]}`} width="w-10" rounded="rounded-full" />
                            <div>
                                <p class="font-bold">{user.name}</p>
                                <p class="opacity-50">{user.email}</p>
                            </div>
                        </div>
						<div class="space-y-2">
                            <a class="btn variant-soft-surface w-full" href="/account" rel="noreferrer">Account</a>
                            <form
                                action="/logout"
                                method="post"
                                use:enhance={() => {
                                    return async ({ result }) => {
                                        invalidateAll();
                                        await applyAction(result);
                                    };
                                }}
                            >
                                <button type="submit" class="btn variant-soft-primary w-full">Log out</button>
                            </form>
                        </div>
					</div>
					<div class="arrow bg-surface-100-800-token" />
				</div>
                <button use:popup={popupClick}>
                    <Avatar initials={`${user.name.split(' ')[0].split('')[0]}${user.name.split(' ')[1].split('')[0]}`} width="w-10" rounded="rounded-full" />
                </button>
            </svelte:fragment>
        </AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden md:block">
            <AppRail background="bg-transparent">
                <AppRailAnchor href="/dashboard" title="Dashboard" selected={$page.url.pathname.includes('dashboard')}>
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Dashboard</span>
                </AppRailAnchor>
                <AppRailAnchor href="/restaurants" title="Restaurants" selected={$page.url.pathname.includes('restaurants')}>
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Restaurants</span>
                </AppRailAnchor>
                <AppRailAnchor href="/kitchen" title="Kitchen" selected={$page.url.pathname.includes('kitchen')}>
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Kitchen</span>
                </AppRailAnchor>
                <AppRailAnchor href="/menu" title="Menu" selected={$page.url.pathname.includes('menu')}>
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Menu</span>
                </AppRailAnchor>
                <AppRailAnchor href="/storage" title="Storage" selected={$page.url.pathname.includes('storage')}>
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>Storage</span>
                </AppRailAnchor>
                <AppRailAnchor href="/qr" title="QR Code" selected={$page.url.pathname.includes('qr')}>
                    <svelte:fragment slot="lead">(icon)</svelte:fragment>
                    <span>QR Code</span>
                </AppRailAnchor>
            </AppRail>
        </div>
	</svelte:fragment>
	
	<div class="px-4 md:px-24 pt-20">
        <slot />
    </div>
</AppShell>