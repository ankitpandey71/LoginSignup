const Footer = () => {
  return (
    <footer className="bg-[#292828] text-yellow-50 ">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-10 mr-3" />
        </div>
        <div className="w-[670px] text-center mb-10 text-white text-lg font-light leading-[150%] font-circular">
          <p>
            Welcome to RUSH, where fitness transcends ordinary boundaries.
            Radiate with vitality, unleash your potential, shred limitations,
            and hustle towards a healthier you.
          </p>
        </div>
        <div className="flex space-x-4 font-bold font-serif text-2xl mb-4">
          <a href="#" className="hover:text-yellow-400">
            OUR PLANS
          </a>
          <a href="#" className="hover:text-yellow-400">
            SUBSCRIPTIONS
          </a>
          <a href="#" className="hover:text-yellow-400">
            CLASSES
          </a>
          <a href="#" className="hover:text-yellow-400">
            CONTACT
          </a>
          <a href="#" className="hover:text-yellow-400">
            ABOUT US
          </a>
        </div>
        <div className="flex space-x-4 mb-4">
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiMzMzlhZjAiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOCw4KSI+PHBhdGggZD0iTTE5LjI1MzkxLDJjLTMuOTQyLDAgLTYuMjUzOTEsMi4wODIxNyAtNi4yNTM5MSw2LjgyNjE3djQuMTczODNoLTV2NWg1djEyaDV2LTEyaDRsMSwtNWgtNXYtMy4zMjgxMmMwLC0xLjc4NyAwLjU4Mjc3LC0yLjY3MTg3IDIuMjU5NzcsLTIuNjcxODdoMi43NDAyM3YtNC43OTQ5MmMtMC40NzQsLTAuMDY0IC0xLjg1NTA5LC0wLjIwNTA4IC0zLjc0NjA5LC0wLjIwNTA4eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
          />
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxyYWRpYWxHcmFkaWVudCBpZD0ieU9ybm5obGlDcmRTMmd5fjR0RDhtYV9YeTEwSmN1MUwyU3VfZ3IxIiBjeD0iMTkuMzgiIGN5PSI0Mi4wMzUiIHI9IjQ0Ljg5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZkNSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjMyOCIgc3RvcC1jb2xvcj0iI2ZmNTQzZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjM0OCIgc3RvcC1jb2xvcj0iI2ZjNTI0NSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjUwNCIgc3RvcC1jb2xvcj0iI2U2NDc3MSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjY0MyIgc3RvcC1jb2xvcj0iI2Q1M2U5MSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjc2MSIgc3RvcC1jb2xvcj0iI2NjMzlhNCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjg0MSIgc3RvcC1jb2xvcj0iI2M4MzdhYiI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCN5T3JubmhsaUNyZFMyZ3l+NHREOG1hX1h5MTBKY3UxTDJTdV9ncjEpIiBkPSJNMzQuMDE3LDQxLjk5bC0yMCwwLjAxOWMtNC40LDAuMDA0LTguMDAzLTMuNTkyLTguMDA4LTcuOTkybC0wLjAxOS0yMAljLTAuMDA0LTQuNCwzLjU5Mi04LjAwMyw3Ljk5Mi04LjAwOGwyMC0wLjAxOWM0LjQtMC4wMDQsOC4wMDMsMy41OTIsOC4wMDgsNy45OTJsMC4wMTksMjAJQzQyLjAxNCwzOC4zODMsMzguNDE3LDQxLjk4NiwzNC4wMTcsNDEuOTl6Ij48L3BhdGg+PHJhZGlhbEdyYWRpZW50IGlkPSJ5T3JubmhsaUNyZFMyZ3l+NHREOG1iX1h5MTBKY3UxTDJTdV9ncjIiIGN4PSIxMS43ODYiIGN5PSI1LjU0IiByPSIyOS44MTMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLjY2NjMgMCAxLjg0OSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0MTY4YzkiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii45OTkiIHN0b3AtY29sb3I9IiM0MTY4YzkiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCN5T3JubmhsaUNyZFMyZ3l+NHREOG1iX1h5MTBKY3UxTDJTdV9ncjIpIiBkPSJNMzQuMDE3LDQxLjk5bC0yMCwwLjAxOWMtNC40LDAuMDA0LTguMDAzLTMuNTkyLTguMDA4LTcuOTkybC0wLjAxOS0yMAljLTAuMDA0LTQuNCwzLjU5Mi04LjAwMyw3Ljk5Mi04LjAwOGwyMC0wLjAxOWM0LjQtMC4wMDQsOC4wMDMsMy41OTIsOC4wMDgsNy45OTJsMC4wMTksMjAJQzQyLjAxNCwzOC4zODMsMzguNDE3LDQxLjk4NiwzNC4wMTcsNDEuOTl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0LDMxYy0zLjg1OSwwLTctMy4xNC03LTdzMy4xNDEtNyw3LTdzNywzLjE0LDcsN1MyNy44NTksMzEsMjQsMzF6IE0yNCwxOWMtMi43NTcsMC01LDIuMjQzLTUsNQlzMi4yNDMsNSw1LDVzNS0yLjI0Myw1LTVTMjYuNzU3LDE5LDI0LDE5eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjMxLjUiIGN5PSIxNi41IiByPSIxLjUiIGZpbGw9IiNmZmYiPjwvY2lyY2xlPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMCwzN0gxOGMtMy44NTksMC03LTMuMTQtNy03VjE4YzAtMy44NiwzLjE0MS03LDctN2gxMmMzLjg1OSwwLDcsMy4xNCw3LDd2MTIJQzM3LDMzLjg2LDMzLjg1OSwzNywzMCwzN3ogTTE4LDEzYy0yLjc1NywwLTUsMi4yNDMtNSw1djEyYzAsMi43NTcsMi4yNDMsNSw1LDVoMTJjMi43NTcsMCw1LTIuMjQzLDUtNVYxOGMwLTIuNzU3LTIuMjQzLTUtNS01SDE4eiI+PC9wYXRoPgo8L3N2Zz4="
          />
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMjg4RDEiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNVYzN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTIgMTlIMTdWMzZIMTJ6TTE0LjQ4NSAxN2gtLjAyOEMxMi45NjUgMTcgMTIgMTUuODg4IDEyIDE0LjQ5OSAxMiAxMy4wOCAxMi45OTUgMTIgMTQuNTE0IDEyYzEuNTIxIDAgMi40NTggMS4wOCAyLjQ4NiAyLjQ5OUMxNyAxNS44ODcgMTYuMDM1IDE3IDE0LjQ4NSAxN3pNMzYgMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgtMS41MDEgMC0yLjMxMyAxLjAxMi0yLjcwNyAxLjk5QzI0Ljk1NyAyNS41NDMgMjUgMjYuNTExIDI1IDI3djloLTVWMTloNXYyLjYxNkMyNS43MjEgMjAuNSAyNi44NSAxOSAyOS43MzggMTljMy41NzggMCA2LjI2MSAyLjI1IDYuMjYxIDcuMjc0TDM2IDM2IDM2IDM2eiI+PC9wYXRoPgo8L3N2Zz4="
          />
        </div>
        <hr className="border-t-2 border-yellow-50 w-5/6 m-2  pt-10 " />
        <div className="mb-5">
          <h6 className="text-center">rushfitness.in</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
