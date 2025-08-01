import { Request, Response, NextFunction } from 'express';
import supabase from '../database/client';

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Access token required' });
      return;
    }

    const token = authHeader.substring(7);
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      res.status(403).json({ error: 'Invalid or expired token' });
      return;
    }

    req.user = data.user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
}

export async function optionalAuth(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      next();
      return;
    }

    const token = authHeader.substring(7);
    const { data, error } = await supabase.auth.getUser(token);

    if (!error && data.user) {
      req.user = data.user;
    }

    next();
  } catch (error) {
    console.error('Optional auth error:', error);
    next();
  }
} 