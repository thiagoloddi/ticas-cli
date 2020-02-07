# Roadmap

- `tc pull`: select branch from list to pull from

- `tc pull --current`: pull from current branch

- `tc commit --push`: push changes after commiting

- `tc commit --pull`: pull from remote after commiting

- `tc commit --update`: pull from remote and push changes after commiting

- `tc merge`: select branch from list to merge into current branch

- `tc log`: selected commit from list and checkout to it

- `tc checkout+`: add functionality to handle uncommited changes

  - stash & pop / stash only
  - commit & pull & push / commit & push / commit only
  - reset --hard
  - reset & clean

- `tc commit [...paths]`: especifies the paths to be added to the commit (default: ./)
