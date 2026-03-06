 function cmd(command, value = null) {
    document.execCommand(command, false, value);
  }

  function addLink() {
    const url = prompt("Digite o link:");
    if (url) cmd('createLink', url);
  }
  