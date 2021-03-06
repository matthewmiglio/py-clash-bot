# py-clash-bot

[![Python Versions](https://img.shields.io/pypi/pyversions/py-clash-bot)](https://www.python.org/downloads/) [![PyPI version](https://badge.fury.io/py/py-clash-bot.svg)](https://pypi.org/project/py-clash-bot/) [![GitHub Python Tests](https://github.com/matthewmiglio/py-clash-bot/actions/workflows/python-tests.yml/badge.svg)](https://github.com/matthewmiglio/py-clash-bot/actions/workflows/python-tests.yml) [![CodeFactor](https://www.codefactor.io/repository/github/matthewmiglio/py-clash-bot/badge)](https://www.codefactor.io/repository/github/matthewmiglio/py-clash-bot)

A Clash Royale automation bot written in Python.

## Install

Choose one of the install methods below

#### a. Windows Install

[Download the latest release](https://github.com/matthewmiglio/py-clash-bot/releases).

#### b. Install with pip

Enter the following into the command line:
```pip install py-clash-bot```

## MEmu Dependency

To emulate the game, [Download and install MEmu](https://www.memuplay.com/).

It is reccomended to install the emulator in Enligsh mode.

### Configure MEmu

Using the Multiple Instance Manager, set the instance, display and appearance settings of your instance to match the following

![MEmu configuration options](https://github.com/matthewmiglio/py-clash-bot/blob/master/docs/src/assets/memu_instance_settings.webp?raw=true)

![MEmu configuration options](https://github.com/matthewmiglio/py-clash-bot/blob/master/docs/src/assets/memu_display_settings.webp?raw=true)

![MEmu configuration options](https://github.com/matthewmiglio/py-clash-bot/blob/master/docs/src/assets/memu_appearance_settings.webp?raw=true)

Then start the emulator and install Clash Royale with the Google Play Store.

It is reccomended to play Clash Royale in English mode.

## Run py-clash-bot

Before attempting to run the bot, make sure both the 'Multi Instance Manager' and the MEmu client are both open.

#### a. Installed on Windows

Run the desktop shortcut the installer created.

#### b. Installed with pip

Enter `pyclashbot` in the command line.

## Configuration

To configure the program, edit **`%appdata%\py-clash-bot\config.json`** in the install location of the program.
