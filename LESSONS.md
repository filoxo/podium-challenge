### Lessons Learned

1. The 'render children as fn' pattern is tricky to begin testing.
2. The FetchResponse component can be costly on network; if the server can return `cache-control` header, this implementation is probably OK. If not, the data received should be stored locally (in App state or Redux store) so that its only retrieved once per page load.
3. Get good at testing 😂 (specifically, find better practices for testing rendered components, Routes).
4. The UI mock I used for review colors is OK, but colors don't pass accessibility.

### Future ideas

1. Accessibility audit
2. Lazy load routes