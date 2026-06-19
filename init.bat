REM initializing next js
npx.cmd -y create-next-app@latest elysio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
REM copying files from subfolder to current folder
xcopy /s /e /h /y elysio .
REM removing the temporary subfolder
rmdir /s /q elysio
REM removing package.json that was created before
del package.json
