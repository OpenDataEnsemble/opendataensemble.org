'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Icon } from './Icons';

type DemoStage = 'collect' | 'saved' | 'syncing' | 'synced';

export default function Demo({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [stage, setStage] = useState<DemoStage>('collect');
  const [habitat, setHabitat] = useState('Woodland');
  const [notes, setNotes] = useState(
    'Healthy canopy. New growth along the trail.',
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog?.close();
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, []);

  useEffect(() => {
    if (stage !== 'syncing') return;
    const timer = window.setTimeout(() => setStage('synced'), 1200);
    return () => window.clearTimeout(timer);
  }, [stage]);

  function saveObservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStage('saved');
  }

  return (
    <dialog
      ref={dialogRef}
      className="demo-dialog"
      aria-labelledby="demo-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="demo-header">
        <span className="eyebrow">
          <span className="status-dot" /> THE OFFLINE-FIRST EXPERIENCE
        </span>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close demo"
        >
          <Icon name="close" />
        </button>
      </div>
      <div className="demo-body">
        <div className="demo-intro">
          <span className="demo-step">
            0{stage === 'collect' ? '1' : stage === 'synced' ? '3' : '2'} / 03
          </span>
          <h2 id="demo-title">
            {stage === 'collect'
              ? 'Go off the grid.'
              : stage === 'synced'
                ? 'Back in harmony.'
                : 'No signal. No problem.'}
          </h2>
          <p>
            {stage === 'collect'
              ? 'Imagine you’re in the field, miles from a connection. Your work doesn’t have to wait.'
              : stage === 'synced'
                ? 'Your observation is ready for the next step. That’s the idea behind the ensemble.'
                : 'Your sample observation is queued in this demo. In Formulus, observations are saved on your device until you’re ready to sync.'}
          </p>
        </div>
        <div className="demo-app">
          <div className="demo-app-bar">
            <span>
              <Icon name="leaf" size="var(--icon-size-site-18)" /> Field
              observations
            </span>
            <span
              className={`connection-badge ${stage === 'synced' ? 'is-online' : ''}`}
            >
              <Icon
                name={stage === 'synced' ? 'check' : 'offline'}
                size="var(--icon-size-site-13)"
              />
              {stage === 'synced' ? 'Synced' : 'Offline'}
            </span>
          </div>
          {stage === 'collect' ? (
            <form onSubmit={saveObservation} className="demo-form">
              <div className="sample-location">
                <Icon name="pin" size="var(--icon-size-site-18)" />
                <div>
                  <strong>Observation point 01</strong>
                  <span>Sample location · 0.3476° N, 32.5825° E</span>
                </div>
              </div>
              <label htmlFor="habitat">Habitat type</label>
              <select
                id="habitat"
                value={habitat}
                onChange={(event) => setHabitat(event.target.value)}
              >
                <option>Woodland</option>
                <option>Grassland</option>
                <option>Wetland</option>
                <option>Urban green space</option>
              </select>
              <label htmlFor="notes">Field notes</label>
              <textarea
                id="notes"
                rows={3}
                maxLength={500}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                required
              />
              <button className="button button-dark" type="submit">
                Save observation{' '}
                <Icon name="plus" size="var(--icon-size-site-18)" />
              </button>
              <span className="demo-form-hint">
                <Icon name="lock" size="var(--icon-size-xs)" /> No internet
                connection needed
              </span>
            </form>
          ) : (
            <div className="demo-result">
              <span
                className={`result-symbol ${stage === 'syncing' ? 'is-spinning' : ''}`}
              >
                <Icon
                  name={
                    stage === 'synced'
                      ? 'check'
                      : stage === 'syncing'
                        ? 'sync'
                        : 'phone'
                  }
                  size="var(--icon-size-site-30)"
                />
              </span>
              <h3>
                {stage === 'synced'
                  ? 'One observation. Connected.'
                  : stage === 'syncing'
                    ? 'Bringing it together…'
                    : 'Saved. Ready when you are.'}
              </h3>
              <dl className="observation-summary">
                <div>
                  <dt>Habitat</dt>
                  <dd>{habitat}</dd>
                </div>
                <div>
                  <dt>Observation</dt>
                  <dd>ODE-DEMO-001</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd className="summary-status" role="status">
                    {stage === 'synced'
                      ? 'Sync complete (simulated)'
                      : stage === 'syncing'
                        ? 'Syncing sample observation…'
                        : '1 sample observation queued'}
                  </dd>
                </div>
              </dl>
              {stage === 'synced' ? (
                <button
                  className="button button-dark"
                  onClick={() => setStage('collect')}
                >
                  Try another observation{' '}
                  <Icon name="arrow" size="var(--icon-size-site-18)" />
                </button>
              ) : (
                <button
                  className="button button-dark"
                  disabled={stage === 'syncing'}
                  onClick={() => setStage('syncing')}
                >
                  {stage === 'syncing' ? 'Syncing…' : 'Simulate going online'}
                  <Icon name="sync" size="var(--icon-size-site-18)" />
                </button>
              )}
            </div>
          )}
        </div>
        <p className="demo-disclaimer">
          Interactive concept demo, not a live Formulus session. Nothing is
          stored or sent to a server.
        </p>
      </div>
    </dialog>
  );
}
