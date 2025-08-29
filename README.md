# Steps to run with Zephyr

1. run `pnpm i`
2. run `pnpm build:ios:zephyr` to upload bundles to Zephyr
3. run `pnpm pods` to install pods
4. on Zephyr for each remote app create new environment for example `staging`
5. Open `apps/host/ios` in Xcode, in `Signing and Capabilities` choose your Team to signing build
6. run `pnpm release:ios:zephyr`

## Publish to remote to Zephyr

1. go to `apps/[app-name]`
2. run `pnpm bundle:ios:zephyr`

---------------------- 

# Run module federation without Zephyr

1. `pnpm build:ios` - build bundles
2. `pnpm serve:ios` - serve remotes locally
3. run `pnpm pods` to install pods
4. on Zephyr for each remote app create new environment for example `staging`
5. Open `apps/host/ios` in Xcode, in `Signing and Capabilities` choose your Team to signing build
6. in new terminal `pnpm release:ios` - build ios

## Change remote w/o Zephyr

1. go to `apps/[app-name]`
2. make any code change
3. `pnpm build:ios` - build bundles
4. `pnpm serve:ios` - serve remotes locally


# Clean cache

- `pnpm clean:ios`