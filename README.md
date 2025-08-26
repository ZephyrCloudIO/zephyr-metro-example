# Steps to run

1. run `pnpm i`
2. run `pnpm build:ios:zephyr` to upload bundles to Zephyr
3. run `pnpm pods` to install pods
4. on Zephyr for each remote app create new environment for example `staging`
5. Open `apps/host/ios` in Xcode, in `Signing and Capabilities` choose your Team to signing build
6. run in Xcode on Simulator or Device

# Publish to Zephyr

1. go to `apps/[app-name]`
2. run `pnpm bundle:ios:zephyr`
