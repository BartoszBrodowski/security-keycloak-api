FROM quay.io/keycloak/keycloak:20.0.3

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin
ENV KEYCLOAK_IMPORT=/tmp/realm-export.json

COPY ./realm-export.json /tmp/realm-export.json

CMD ["-Dkeycloak.migration.action=import", "-Dkeycloak.migration.provider=singleFile", "-Dkeycloak.migration.file=/tmp/realm-export.json", "start-dev"]