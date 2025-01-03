FROM mcr.microsoft.com/devcontainers/base:bullseye

RUN apt update && \
    apt install -y vim curl xdg-utils
ARG USERNAME=vscode
RUN echo "export PATH=\"/home/${USERNAME}/.bun/bin:\$PATH\"" >> /home/${USERNAME}/.bashrc
RUN export PATH="/home/$USERNAME/.bun/bin:$PATH"
RUN . /home/${USERNAME}/.bashrc
