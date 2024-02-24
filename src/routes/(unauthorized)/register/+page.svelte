<script>

</script>

<header class="card-header text-lg uppercase font-bold text-center">Register</header>
<section class="p-4">
    <form action="" class="flex flex-col gap-2">
        <input class="input" title="Email" type="email" placeholder="Email" name="email" id="email"/>
        <input class="input" title="Password" type="password" placeholder="Password" name="password" id="password"/>
        <input class="input" title="Confirm password" type="password" placeholder="Confirm password" name="confirm_password" id="confirm_password"/>
        <button type="submit" class="btn variant-filled-primary">Register</button>
    </form>
</section>
<footer class="card-footer flex items-center justify-between gap-10">
    <a href="/login" class="hover:text-primary-500" data-sveltekit-preload-data="hover">Already have an account?</a>
</footer>