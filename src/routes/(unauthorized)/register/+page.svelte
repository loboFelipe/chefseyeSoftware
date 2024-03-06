<script lang="ts">
	import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<header class="card-header text-lg uppercase font-bold text-center">Register</header>
<section class="p-4">
    <form class="flex flex-col gap-2" method="POST" action="?/register" use:enhance>
        <div class="flex items-center justify-between gap-2">
            <input class="input" title="First Name" type="text" placeholder="First name" name="first_name" id="first_name"/>
            <input class="input" title="Last Name" type="text" placeholder="Last name" name="last_name" id="last_name"/>
        </div>
        <input class="input" title="Email" type="email" placeholder="Email" name="email" id="email"/>
        <input class="input" title="Password" type="password" placeholder="Password" name="password" id="password"/>
        <input class="input" title="Confirm password" type="password" placeholder="Confirm password" name="confirm_password" id="confirm_password"/>
        <button type="submit" class="btn variant-filled-primary">Register</button>
    </form>
</section>
<footer class="card-footer flex items-center justify-between gap-10">
    <a href="/login" class="hover:text-primary-500" data-sveltekit-preload-data="hover">Already have an account?</a>
</footer>