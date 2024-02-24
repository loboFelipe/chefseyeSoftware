<script>

</script>

<header class="card-header text-lg uppercase font-bold text-center">Login</header>
<section class="p-4">
    <form action="" class="flex flex-col gap-2">
        <input class="input" title="Email" type="email" placeholder="Email" name="email" id="email"/>
        <input class="input" title="Password" type="password" placeholder="Password" name="password" id="password"/>
        <button type="submit" class="btn variant-filled-primary">Login</button>
    </form>
</section>
<footer class="card-footer flex items-center justify-between gap-10">
    <a href="/register" class="hover:text-primary-500" data-sveltekit-preload-data="hover">Doesn't have an account?</a>
    <a href="/forgot_password" class="hover:text-primary-500" data-sveltekit-preload-data="hover">Forgot password?</a>
</footer>