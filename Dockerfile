FROM node:lts-alpine3.11 as development
ENV PATH="${PATH}:/node_modules/.bin:/app/bin" \
  WORKDIR="/app"

WORKDIR ${WORKDIR}
VOLUME /app
EXPOSE 3000-3002

ENTRYPOINT [ "entrypoint" ]
CMD ["npm", "start"]
