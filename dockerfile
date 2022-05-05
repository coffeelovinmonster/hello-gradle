from tomcat AS fancy_cat

RUN mv /usr/local/tomcat/webapps.dist/* /usr/local/tomcat/webapps

# copy the dist folder into the tomcat home directory
COPY npm-app/dist /usr/local/tomcat/webapps/ROOT

#EXPOSE itself indecently
EXPOSE 8080