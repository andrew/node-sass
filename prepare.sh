#!/bin/bash
# Exists to fully update the git repo that you are sitting in...
cd "$(sudo git rev-parse --show-toplevel)"
sudo git pull && git submodule init && git submodule update && git submodule status