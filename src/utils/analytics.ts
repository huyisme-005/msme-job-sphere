
// Simple analytics module
interface PageView {
  path: string;
  timestamp: number;
  referrer: string;
}

interface UserAction {
  type: string;
  element: string;
  timestamp: number;
  data?: any;
}

class Analytics {
  private static instance: Analytics;
  private pageViews: PageView[] = [];
  private userActions: UserAction[] = [];
  private sessionStartTime: number;
  private isTracking: boolean = false;

  private constructor() {
    this.sessionStartTime = Date.now();
    
    // Check if user has opted in
    const analyticsEnabled = localStorage.getItem('analytics_enabled');
    this.isTracking = analyticsEnabled === 'true';
  }

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public setTrackingEnabled(enabled: boolean): void {
    this.isTracking = enabled;
    localStorage.setItem('analytics_enabled', enabled.toString());
    
    if (enabled) {
      console.log('Analytics tracking enabled');
    } else {
      console.log('Analytics tracking disabled');
    }
  }

  public isTrackingEnabled(): boolean {
    return this.isTracking;
  }

  public trackPageView(path: string, referrer: string = document.referrer): void {
    if (!this.isTracking) return;
    
    const pageView: PageView = {
      path,
      timestamp: Date.now(),
      referrer
    };
    
    this.pageViews.push(pageView);
    this.sendToServer('pageView', pageView);
  }

  public trackAction(type: string, element: string, data?: any): void {
    if (!this.isTracking) return;
    
    const action: UserAction = {
      type,
      element,
      timestamp: Date.now(),
      data
    };
    
    this.userActions.push(action);
    this.sendToServer('userAction', action);
  }

  public getSessionDuration(): number {
    return Date.now() - this.sessionStartTime;
  }

  private sendToServer(eventType: string, data: any): void {
    // In a real implementation, this would send data to a server
    // For now, we'll just log to console
    console.log(`[Analytics] ${eventType}:`, data);
    
    // In a production environment, you'd use something like:
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ eventType, data })
    // });
  }
}

export const analytics = Analytics.getInstance();

// Set up route tracking
export const setupRouteTracking = () => {
  if (typeof window !== 'undefined') {
    // Track initial page load
    analytics.trackPageView(window.location.pathname);
    
    // Track history changes (when using React Router)
    const originalPushState = history.pushState;
    history.pushState = function(state, title, url) {
      originalPushState.apply(this, [state, title, url]);
      if (url) {
        const path = typeof url === 'string' ? url : url.toString();
        analytics.trackPageView(path);
      }
    };
    
    // Track browser back/forward button
    window.addEventListener('popstate', () => {
      analytics.trackPageView(window.location.pathname);
    });
  }
};

export default analytics;
