

describe('RPG Quest Logic Variables', function() {

  it('should be false for canExecuteFastAttack when knight is awake', function() {
    expect(canExecuteFastAttack).toBe(false);
  });

  it('should be true for canSpy if at least one character is awake', function() {
    expect(canSpy).toBe(true);
  });

  it('should be true for canSignalPrisoner if prisoner is awake and archer is asleep', function() {
    expect(canSignalPrisoner).toBe(true);
  });

  it('should be true for canFreePrisoner if dog is present and archer is asleep', function() {
    expect(canFreePrisoner).toBe(true);
  });
});